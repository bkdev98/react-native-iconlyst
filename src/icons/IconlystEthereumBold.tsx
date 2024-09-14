import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEthereumBold = ({
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
      d="m16.84 12.468-4.618 2.174a.53.53 0 0 1-.45-.001l-4.607-2.173a.528.528 0 0 1 0-.955l4.607-2.174a.53.53 0 0 1 .45 0l4.618 2.173a.529.529 0 0 1 0 .956m2.209-.738c0-.01 0-.01-.01-.02 0-.01 0-.03-.01-.04s-.01-.03-.03-.04c0-.01 0-.02-.01-.03 0-.02-.01-.03-.02-.04l-.04-.05-6.31-8.95c-.29-.4-.95-.4-1.23 0l-6.3 8.93c-.02.02-.04.05-.05.07-.01.01-.01.01-.01.02-.01.01-.02.03-.03.05-.02.01-.02.03-.03.04-.02.03-.03.06-.03.1-.01.01-.01.02-.01.03-.02.06-.03.12-.03.19 0 .01 0 .03.01.05-.01.05 0 .1.02.14 0 .02 0 .03.01.04 0 .01 0 .01.01.02a.3.3 0 0 0 .04.1c.01.03.03.06.04.08l.02.02.04.05 6.3 8.94c.14.2.37.31.61.31.25 0 .48-.11.62-.31l6.35-9c.02-.03.04-.07.05-.1.02-.02.02-.03.02-.04.02-.04.03-.08.04-.13v-.01c.03-.11.03-.21 0-.31v-.01c-.01-.04-.01-.07-.03-.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEthereumBold;
