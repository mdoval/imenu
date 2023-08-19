"use client";

import BotonSubmit from "@/app/components/Buttons/BotonSubmit";
import { useFormik } from "formik";

export default function NewBarPage() {
  const formik = useFormik({
    initialValues: {
      nombre: "",
      logo: "/images/no-foto.png",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="w-full bg-white p-4 rounded-lg border-2">
      <h1>Nuevo Bar</h1>
      <hr />
      <div className="flex flex-col">
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className=" w-1/3">
              <label class="block m-2 w-full">
                <span class="block text-sm font-medium text-slate-700 m-1">
                  Nombre
                </span>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-1"
                />
                <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>
            </div>
            <div className="w-1/3">
                <BotonSubmit />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
