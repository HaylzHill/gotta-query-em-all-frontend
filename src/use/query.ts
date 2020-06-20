const useQuery = async (query: string) => {
  const uri = process.env.GQL_URI;
  const options = {
    body: JSON.stringify({ query }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  };

  try {
    const buffer = new Promise(resolve => setTimeout(() => resolve(), 5000));
    const response = await fetch(uri, options);
    const { data } = await response.json();

    // buffer fetch to at least 5 seconds
    await buffer;

    return data ?? {}
  } catch (err) {
    return {};
  }
};

export default useQuery;
