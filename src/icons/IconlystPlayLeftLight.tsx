import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayLeftLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.818 19.766c-2.792-1.125-6.466-3.484-8.496-5.323q-2.778-2.44 0-4.882c2.03-1.837 5.704-4.196 8.496-5.32 2.272-.738 3.58.23 3.992 2.789.18 1.6.265 3.263.258 4.972a43 43 0 0 1-.258 4.974c-.398 2.567-1.722 3.51-3.992 2.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayLeftLight;
