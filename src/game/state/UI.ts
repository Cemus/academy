import type { Menu } from "../ui/models/Menu";

export default class UI {
  private emit: () => void;
  private _currentMenu: Menu = "main";

  constructor(emit: () => void) {
    this.emit = emit;
  }

  public set currentMenu(menu: Menu) {
    this._currentMenu = menu;
    this.emit();
  }

  public get currentMenu() {
    return this._currentMenu;
  }
}
