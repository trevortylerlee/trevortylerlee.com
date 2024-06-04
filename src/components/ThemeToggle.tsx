import { Select } from "./ui/select";

export default function ThemeToggle() {
  return (
    <div>
      <Select name="theme-toggle" id="theme-toggle">
        <option value="auto">auto</option>
        <option value="dark">dark</option>
        <option value="light">light</option>
      </Select>
    </div>
  );
}
