import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

export interface FilePreview {
  preview: string;
  name: string;
}

type DropzoneProps = {
  onChange: (file: FilePreview) => void;
};

function Dropzone({ onChange }: DropzoneProps) {
  const [files, setFiles] = useState<FilePreview[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (files.length === 0) return;
    onChange(files[selected]);
  }, [files, onChange, selected]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      setSelected(0);
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="w-64 bg-desert p-4">
      <div className="border-2 border-dashed border-slate-700 p-8 m-4 cursor-pointer select-none">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Glisser des images ici ou cliquer pour les sélectioner</p>
        </div>
      </div>
      <div className="flex-row m-4">
        {files.map((file, i) => (
          <div key={file.name}>
            <img
              src={file.preview}
              className={classNames("w-max h-auto mt-4", {
                "border-4 border-slate-700": selected === i,
              })}
              // Revoke data uri after image is loaded

              onClick={() => {
                setSelected(i);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropzone;
