import supabase from './supabaseClient';

export const fetchComments = async () => {
  const { data, error } = await supabase.from('comments').select('*').order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const addComment = async (comment) => {
  const { data, error } = await supabase.from('comments').insert([comment]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const deleteComment = async (id) => {
  const { data, error } = await supabase.from('comments').delete().match({ id });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const updateComment = async (id, content) => {
  console.log('content', content);
  const { data, error } = await supabase.from('comments').update({ content }).match({ id });
  console.log('data', data);

  if (error) {
    console.error('Update error:', error.message);
    throw new Error(error.message);
  }

  return data;
};

export const confirmDeleteComment = async (id, nickname, password, deleteCommentMutation) => {
  try {
    const { data, error } = await supabase.from('comments').select('*').match({ id, nickname, password }).single();

    if (error) throw error;

    if (!data) {
      alert('닉네임 또는 비밀번호가 일치하지 않습니다.');
      return;
    }

    const confirm = window.confirm('정말 삭제하시겠습니까?');

    if (confirm) deleteCommentMutation.mutate(id);
  } catch (error) {
    alert(`정보가 일치하지 않습니다.`);
  }
};

export const confirmUpdateComment = async (id, nickname, password, content, updateCommentMutation) => {
  try {
    const { data, error } = await supabase.from('comments').select('*').match({ id, nickname, password }).single();

    if (error) throw error;

    if (!data) {
      alert('닉네임 또는 비밀번호가 일치하지 않습니다.');
      return;
    }

    const confirm = window.confirm('정말 수정하시겠습니까?');

    if (confirm) updateCommentMutation.mutate({ id, content });
  } catch (error) {
    alert(`정보가 일치하지 않습니다.`);
  }
};
