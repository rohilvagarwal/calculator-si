export function button(func, content)
{
    return <button onClick={() => func(content)}>{content}</button>;
}