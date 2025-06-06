import apiClient from "./apiClient";

export const createClient = async (clientData) => {
  try {
    const { data } = await apiClient.post("/admin/user/create", {
      name: clientData.nombre,
      lastName: clientData.apellido,
      email: clientData.email,
      phoneNumber: clientData.telefono,
      password: clientData.password,
      role: "FREQUENT_CUSTOMER",
      status: "ACTIVE",
      code: clientData.code
    });
    return data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const updateClient = async (clientData) => {
  try {
    const { data } = await apiClient.put("/employee/user/update", {
      id: clientData.id,
      name: clientData.nombre,
      lastName: clientData.apellido,
      email: clientData.email,
      phoneNumber: clientData.telefono,
      password: clientData.password || undefined,
      role: "FREQUENT_CUSTOMER",
      status: clientData.status
    });
    return data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getClients = async () => {
  try {
    const { data } = await apiClient.get("/admin/user/all");
    const clients = data.result.filter(user => user.role === "FREQUENT_CUSTOMER");
    return clients;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
