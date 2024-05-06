export async function GET({}) {
  await new Promise((res) => setTimeout(res, 500));

  return new Response(JSON.stringify({ count: 625 }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
