import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCircleStickerBold = ({
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
      d="M11.272 3.748h.07c.25 0 .51.12.72.32l7.08 7.08.78.79c.23.23.35.52.32.79-6.12-.21-8.76-2.86-8.97-8.98m10.27 7.95c-.12-.3-.31-.58-.56-.82l-7.86-7.87c-.23-.22-.49-.4-.76-.53-.03-.01-.05-.02-.08-.03-.04-.02-.08-.04-.12-.04q-.495-.195-1.02-.15c-5.06.45-8.96 4.78-8.89 9.86.07 5.24 4.39 9.56 9.62 9.63h.14c5.02 0 9.28-3.88 9.73-8.89.03-.39-.03-.79-.2-1.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCircleStickerBold;
