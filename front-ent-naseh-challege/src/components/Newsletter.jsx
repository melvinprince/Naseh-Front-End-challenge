import { TextField, InputAdornment, IconButton } from "@mui/material";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

export default function Newsletter() {
  return (
    <div className="bg-(--color-tertiary) pb-25">
      <div className="w-[80%] mx-auto h-[30rem] flex items-end justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold">Newsletter</h3>
          <p className="text-gray-500 w-[70%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            architecto laudantium reiciendis rerum eveniet vel.
          </p>
        </div>
        <div>
          <form action="">
            <TextField
              placeholder="Enter your email"
              InputProps={{
                sx: {
                  borderRadius: "30px",
                  backgroundColor: "#ffffff",
                  width: "700px",
                  "& fieldset": {
                    borderRadius: "30px",
                  },
                  "@media (max-width: 1300px)": {
                    width: "500px",
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailSharpIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      type="submit"
                      edge="end"
                      sx={{
                        backgroundColor: "#0e2345",
                        color: "#fff",
                        padding: "14px 24px",
                        width: "100px",
                        borderRadius: "30px",
                        fontSize: "14px",
                        "&:hover": {
                          backgroundColor: "#121312",
                        },
                        "@media (max-width: 1300px)": {
                          width: "80px",
                        },
                      }}
                    >
                      Submit
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "12px", // Ensures full rounded corners
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px", // Ensures the border adapts
                },
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
