import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquareLeftOutline = ({
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
      d="M4.835 4.92c-.676.726-1.085 1.789-1.085 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.95 1.17h8.433c1.289 0 2.277-.45 2.948-1.17.675-.726 1.084-1.789 1.084-3.106V8.026c0-1.316-.41-2.38-1.087-3.106-.672-.72-1.661-1.17-2.945-1.17H7.783c-1.289 0-2.278.45-2.948 1.17M3.737 3.898C4.721 2.84 6.124 2.25 7.783 2.25h8.435c1.655 0 3.057.591 4.042 1.647.979 1.05 1.49 2.501 1.49 4.13v7.947c0 1.627-.508 3.078-1.487 4.128-.983 1.057-2.386 1.648-4.045 1.648H7.784c-1.66 0-3.063-.59-4.047-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.509-3.078 1.487-4.128"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.767 8.973a.75.75 0 0 1 .983.4l.67 1.587 1.576-.666a.75.75 0 0 1 .584 1.381l-2.266.958a.75.75 0 0 1-.983-.398l-.963-2.279a.75.75 0 0 1 .399-.983"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.4 8.508a3.49 3.49 0 0 0-3.494 3.396.75.75 0 1 1-1.5-.038 4.995 4.995 0 0 1 9.986.135 4.99 4.99 0 0 1-4.993 4.993 4.99 4.99 0 0 1-3.685-1.62.75.75 0 1 1 1.105-1.015 3.49 3.49 0 0 0 2.58 1.135 3.49 3.49 0 0 0 3.494-3.493 3.495 3.495 0 0 0-3.494-3.493"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshSquareLeftOutline;
