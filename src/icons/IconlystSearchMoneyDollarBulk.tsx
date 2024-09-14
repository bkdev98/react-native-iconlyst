import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchMoneyDollarBulk = ({
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
      d="M11.133 2.498a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.993 19.795-1.984-1.979a1.001 1.001 0 0 0-1.412 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416M11.333 12.629c-.02 0-.05 0-.07.01h.15c-.03-.01-.05-.01-.08-.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.083 14.439v-.3c1.09-.02 1.97-.91 1.97-2.01s-.9-2-2.01-2h-1.43c-.28 0-.51-.22-.51-.51 0-.27.23-.5.51-.5h2.33a.749.749 0 1 0 0-1.5h-.86v-.31a.749.749 0 1 0-1.5 0v.31c-1.1.02-1.98.91-1.98 2 0 1.11.9 2.01 2.01 2.01h1.43c.28 0 .51.23.51.5 0 .28-.24.51-.51.51h-2.33a.749.749 0 1 0 0 1.5h.87v.3c0 .42.33.75.75.75.41 0 .75-.33.75-.75"
    />
  </Svg>
);
export default IconlystSearchMoneyDollarBulk;
