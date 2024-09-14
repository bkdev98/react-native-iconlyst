import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsHorizontalRightSquareOutline = ({
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
      d="M12.766 8.102a.75.75 0 0 1 .75-.75h2.165a.75.75 0 0 1 .75.75v2.165a.75.75 0 0 1-1.5 0V8.852h-1.415a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.211 7.571a.75.75 0 0 1 0 1.06l-7.362 7.363a.75.75 0 1 1-1.061-1.06L15.15 7.57a.75.75 0 0 1 1.061 0M15.68 12.982a.75.75 0 0 1 .75.75v2.166a.75.75 0 0 1-.75.75h-2.164a.75.75 0 0 1 0-1.5h1.415v-1.416a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.788 8.005a.75.75 0 0 1 1.06 0l7.362 7.361a.75.75 0 0 1-1.06 1.061L7.788 9.065a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsHorizontalRightSquareOutline;
