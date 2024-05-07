import { comments } from "@/utils/comments/data";
import { redirect } from "next/navigation";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const intId = parseInt(params.id);

  if (intId > comments.length) {
    redirect("/api/comments");
  }

  const comment = comments.find((comment) => comment.id === intId);

  return new Response(JSON.stringify(comment), {
    status: 200,
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  comments[index].text = text;

  return new Response(JSON.stringify(comments[index]), {
    status: 200,
  });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const deletedCommentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  const deletedComment = comments[deletedCommentIndex];
  comments.splice(deletedCommentIndex, 1);

  return new Response(JSON.stringify(deletedComment), {
    status: 200,
  });
}
