import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayUpLight = ({
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
      d="M19.766 14.816c-1.125-2.792-3.484-6.466-5.323-8.496q-2.44-2.778-4.882 0c-1.837 2.03-4.196 5.704-5.32 8.496-.738 2.272.23 3.58 2.789 3.992 1.6.18 3.263.265 4.972.258a43 43 0 0 0 4.974-.258c2.567-.398 3.51-1.722 2.79-3.992"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayUpLight;
