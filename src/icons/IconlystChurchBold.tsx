import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChurchBold = ({
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
      d="M12.701 13.385a.75.75 0 0 1-1.5 0v-1.72a.75.75 0 0 1 1.5 0zm8.369 1.366-4.177-2.192a.24.24 0 0 1-.13-.214v-2.23c0-.574-.281-1.113-.758-1.447L12.958 6.57c-.078-.054-.166-.082-.251-.122V4.755h1.134a.75.75 0 0 0 0-1.5h-1.134v-.63a.75.75 0 0 0-1.5 0v.63h-1.045a.75.75 0 0 0 0 1.5h1.045v1.694c-.083.04-.171.068-.248.122L7.955 8.674a1.76 1.76 0 0 0-.742 1.431v2.24a.24.24 0 0 1-.134.217l-4.15 2.19a.75.75 0 0 0 .7 1.326l.904-.476v5.023c0 .827.673 1.5 1.5 1.5h3.021c.827 0 1.5-.673 1.5-1.5v-1.82c0-.805.658-1.46 1.466-1.46.809 0 1.467.655 1.467 1.46v1.82c0 .827.673 1.5 1.5 1.5h2.849c.827 0 1.5-.673 1.5-1.5v-5.09l1.036.544a.75.75 0 0 0 1.013-.315.75.75 0 0 0-.315-1.013"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChurchBold;
