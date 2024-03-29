use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(x: i32, y: i32) -> i32 {
    return x + y;
}
#[wasm_bindgen]
pub fn mul(x: i32, y: i32) -> i32 {
    return x*y; 
}

#[cfg(test)]
mod tests {
    use super::add;

    #[test]
    fn _add() {
        assert_eq!(add(2, 2), 4);
    }
}
