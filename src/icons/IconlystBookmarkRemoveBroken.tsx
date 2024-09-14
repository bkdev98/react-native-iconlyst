import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkRemoveBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.453 10.47h5.59M15.207 3c2.52 0 4.27 1.024 4.27 3.586l.005 13.526a.884.884 0 0 1-1.318.77l-5.888-3.326-5.943 3.331a.882.882 0 0 1-1.315-.77V16.69M11.454 3H9.29c-2.442 0-4.272.956-4.272 3.415v6.85"
    />
  </Svg>
);
export default IconlystBookmarkRemoveBroken;
