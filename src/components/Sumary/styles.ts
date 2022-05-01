import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: -7rem;
    gap: 2rem;

    div { 
        font-size: 1rem;
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &.highlight-background { 
        background: var(--green);
        color: #fff;
    }
    }

    header { 
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong { 
        display: block;
        padding-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
    }
`;

