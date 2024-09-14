import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBikeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.854 18a2.4 2.4 0 0 1-2.395-2.395 2.39 2.39 0 0 1 1.021-1.956l.44 1.462a.75.75 0 1 0 1.436-.431l-.439-1.464a2.396 2.396 0 0 1 2.333 2.389A2.4 2.4 0 0 1 17.854 18M6.145 18a2.4 2.4 0 0 1-2.395-2.395 2.397 2.397 0 0 1 2.395-2.395c.241 0 .468.046.687.113l-.8 1.142a.75.75 0 1 0 1.228.86l.802-1.143c.297.399.48.888.48 1.423A2.4 2.4 0 0 1 6.144 18m3.73-8.03-.943-1.885h.358a.75.75 0 0 0 0-1.5H6.646a.75.75 0 0 0 0 1.5h.61l1.273 2.469-.806 1.497a3.83 3.83 0 0 0-2.623-.197c-1.412.39-2.528 1.593-2.786 3.034a3.906 3.906 0 0 0 4.802 4.495c1.015-.247 1.89-.946 2.398-1.858.676-1.21.633-2.35.256-3.321l2.77.263a.5.5 0 0 0 .416-.157l2.817-3.015.266.885c-1.485.79-2.414 2.49-1.967 4.368a3.88 3.88 0 0 0 2.863 2.847 3.903 3.903 0 0 0 4.815-3.79 3.9 3.9 0 0 0-3.896-3.895c-.13 0-.252.026-.379.039l-1.589-5.29 1.33-.507a.75.75 0 0 0-.537-1.402l-1.98.758a.75.75 0 0 0-.45.917l.86 2.862"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBikeBold;
