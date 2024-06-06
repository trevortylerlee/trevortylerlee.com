import { Select } from "./ui/select";

export default function ThemeToggle() {
  return (
    <div>
      <Select name="theme-toggle" id="theme-toggle">
        <option value="auto">Auto</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </Select>
    </div>
  );
}
