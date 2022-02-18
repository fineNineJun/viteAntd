export interface AppState {
    count: number
}

export interface SettingsState {
    logo: string,
    title: string,
    isCollapse: boolean
}

export interface RoutesState {
    routes: Array<Object>,
    menus: Array<Object>
}

export interface RootStateTypes {
    app: AppState,
    routes: RoutesState,
    settings: SettingsState
}