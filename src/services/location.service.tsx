import { ILocation } from "@/pages/location";
import http from "./http.common";

class LocationDataService {
  async getAll() {
    const req = await http.get<Array<ILocation>>("/locations");
    return req.data;
  }

  get(id: string) {
    return http.get<ILocation>(`/locations/${id}`);
  }

  create(data: ILocation) {
    return http.post<ILocation>("/locations", data);
  }

  update(data: ILocation, id: any) {
    return http.put<any>(`/locations/${id}`, data);
  }

  delete(id: any) {
    return http.delete<any>(`/locations/${id}`);
  }

  deleteAll() {
    return http.delete<any>(`/locations`);
  }

  findByTitle(title: string) {
    return http.get<Array<ILocation>>(`/locations?title=${title}`);
  }
}

export default new LocationDataService();
