type Error = {
  message: string;
  statusText: any;
  status: any;
};

export async function getVans() {
  let res = await fetch("/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status,
    } as Error;
  }
  let data = await res.json();
  return data.vans;
}
