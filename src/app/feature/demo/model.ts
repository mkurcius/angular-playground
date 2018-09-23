export interface Model {
  id: number;
  group: Model.Group1;
  array: Model.Group2[];
}

export namespace Model {
  export interface Group1 {
    prop1: string;
    prop2: number;
  }

  export interface Group2 {
    prop3: string;
    prop4: number;
  }
}
