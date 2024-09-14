import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpTwiceBold = ({
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
      d="M12.427 9.046a1 1 0 0 0 .707-1.707L9.172 3.376a1 1 0 0 0-1.416 0L3.793 7.339a1 1 0 0 0 1.415 1.414l2.258-2.257v13.422a1 1 0 1 0 2 0V6.497l2.255 2.256a1 1 0 0 0 .707.293M21.207 14.576l-3.581-3.582q-.002 0-.003-.002a1 1 0 0 0-.683-.293h-.024c-.008 0-.024.002-.023 0h-.001a1 1 0 0 0-.683.293l-.003.002-3.581 3.582a.999.999 0 1 0 1.414 1.414l1.877-1.877v5.805a1 1 0 1 0 2 0v-5.805l1.877 1.877a.999.999 0 1 0 1.414-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpTwiceBold;
