import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRotatePhone3Outline = ({
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
      d="M14.628 21.443a4.18 4.18 0 0 1-2.962-1.224l-7.635-7.634a4.19 4.19 0 0 1 0-5.924l2.88-2.88a4.2 4.2 0 0 1 5.923 0l7.635 7.634a4.19 4.19 0 0 1 0 5.927l-2.878 2.878a4.18 4.18 0 0 1-2.963 1.223M9.871 4.056a2.68 2.68 0 0 0-1.9.786L5.091 7.72a2.69 2.69 0 0 0 0 3.8l7.635 7.634a2.753 2.753 0 0 0 3.8 0l2.878-2.878a2.69 2.69 0 0 0 0-3.8L11.77 4.844a2.68 2.68 0 0 0-1.898-.788M9.304 21.75a.7.7 0 0 1-.172-.02 8.86 8.86 0 0 1-4.207-2.407 8.83 8.83 0 0 1-2.405-4.206.749.749 0 0 1 1.148-.794l1.717 1.153a.749.749 0 0 1-.535 1.361 8 8 0 0 0 1.132 1.422 7.35 7.35 0 0 0 3.49 2.006.751.751 0 0 1-.172 1.48zM21.25 9.804a.75.75 0 0 1-.418-.128l-1.716-1.153a.75.75 0 0 1 .531-1.364 8 8 0 0 0-1.134-1.422 7.36 7.36 0 0 0-3.49-2.006.75.75 0 1 1 .344-1.46 8.86 8.86 0 0 1 4.207 2.4 8.8 8.8 0 0 1 2.405 4.208.75.75 0 0 1-.73.92z"
    />
    <Path fill={props.color} d="M15.895 16.645a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
  </Svg>
);
export default IconlystRotatePhone3Outline;
