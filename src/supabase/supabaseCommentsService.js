import supabase from './supabaseClient';

const handleSupabaseRequest = async (request) => {
  const { data, error } = await request;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const handleConfirmRequest = async (id, nickname, password, callback, action) => {
  try {
    const { data, error } = await supabase.from('comments').select('*').match({ id, nickname, password }).single();

    if (error) throw error;

    if (!data) {
      alert('닉네임 또는 비밀번호가 일치하지 않습니다.');
      return;
    }

    const confirm = window.confirm(`정말로 ${action === 'deleteComment' ? '삭제' : '수정'}하시겠습니까?`);

    if (confirm) await callback();
  } catch (error) {
    alert(`정보가 일치하지 않습니다.`);
  }
};

export const fetchComments = async () => {
  return handleSupabaseRequest(supabase.from('comments').select('*').order('created_at', { ascending: false }));
};

export const addComment = async (comment) => {
  return handleSupabaseRequest(supabase.from('comments').insert(comment));
};

export const deleteComment = async (id) => {
  return handleSupabaseRequest(supabase.from('comments').delete().match({ id }));
};

export const updateComment = async ({ id, content }) => {
  return handleSupabaseRequest(supabase.from('comments').update({ content }).match({ id }));
};

export const confirmDeleteComment = async (id, nickname, password, deleteCommentMutation) => {
  await handleConfirmRequest(id, nickname, password, () => deleteCommentMutation(id), 'deleteComment');
};

export const confirmUpdateComment = async (id, nickname, password, content, updateCommentMutation) => {
  await handleConfirmRequest(id, nickname, password, () => updateCommentMutation({ id, content }), 'updateComment');
};
