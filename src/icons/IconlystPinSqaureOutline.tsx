import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinSqaureOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.249 8.32a2.956 2.956 0 0 0-2.955 2.956c0 1.045.633 2.16 1.441 3.07.393.442.8.804 1.131 1.05q.237.172.383.25.146-.078.383-.25a7.7 7.7 0 0 0 1.131-1.05c.808-.91 1.441-2.025 1.441-3.07A2.956 2.956 0 0 0 12.25 8.32m-4.455 2.956a4.456 4.456 0 1 1 8.91 0c0 1.593-.923 3.056-1.82 4.066-.459.517-.941.95-1.36 1.26a5 5 0 0 1-.598.383c-.15.078-.405.198-.677.198s-.527-.12-.677-.198a5 5 0 0 1-.598-.384 9 9 0 0 1-1.36-1.26c-.897-1.009-1.82-2.472-1.82-4.065"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.31 11.269a.94.94 0 1 1 1.88 0 .94.94 0 0 1-1.88 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinSqaureOutline;
