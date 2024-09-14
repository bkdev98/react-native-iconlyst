import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkCloseLight = ({
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
      d="M14.957 3c2.52 0 4.27 1.024 4.27 3.586l.005 13.526a.884.884 0 0 1-1.318.77l-5.888-3.326-5.943 3.331a.882.882 0 0 1-1.315-.77V6.414C4.768 3.956 6.598 3 9.04 3zM10.023 8.494l3.954 3.953m0-3.953-3.954 3.953"
    />
  </Svg>
);
export default IconlystBookmarkCloseLight;
