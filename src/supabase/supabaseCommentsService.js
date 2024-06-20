import supabase from './supabaseClient';

const handleSupabaseRequest = async (request) => {
  const { data, error } = await request;

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const handleConfirmRequest = async (id, password, callback, action) => {
  try {
    const { data, error } = await supabase.from('comments').select('*').match({ id, password }).single();

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

export const fetchComments = async (shopId) => {
  return handleSupabaseRequest(
    supabase.from('comments').select('*').eq('shopId', shopId).order('created_at', { ascending: false })
  );
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

export const confirmDeleteComment = async (id, password, deleteCommentMutation) => {
  await handleConfirmRequest(id, password, () => deleteCommentMutation(id), 'deleteComment');
};

export const confirmUpdateComment = async (id, password, content, updateCommentMutation) => {
  await handleConfirmRequest(id, password, () => updateCommentMutation({ id, content }), 'updateComment');
};
