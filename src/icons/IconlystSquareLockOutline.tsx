import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLockOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.087 5.887C4.41 6.613 4 7.677 4 8.993v7.948c0 1.318.409 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.993c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17M3.99 4.864c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.647C21.49 5.915 22 7.365 22 8.993v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.5-1.487-4.128V8.993c0-1.628.511-3.079 1.49-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.418 11.622a2.835 2.835 0 0 1 5.671 0c0 .736-.282 1.4-.737 1.898l.493 1.482a1.634 1.634 0 0 1-1.55 2.15h-2.082a1.634 1.634 0 0 1-1.55-2.15l.493-1.482a2.8 2.8 0 0 1-.738-1.898m2.835-1.335c-.737 0-1.335.598-1.335 1.335 0 .436.212.822.548 1.07a.75.75 0 0 1 .267.84l-.646 1.942a.134.134 0 0 0 .126.177h2.082a.134.134 0 0 0 .126-.177l-.646-1.942a.75.75 0 0 1 .267-.84c.335-.247.547-.634.547-1.07 0-.737-.598-1.335-1.336-1.335"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareLockOutline;
