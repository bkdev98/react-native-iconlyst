import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMobileCardBankOutline = ({
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
      d="M7.587 3.75A2.87 2.87 0 0 0 4.72 6.618v10.764a2.867 2.867 0 0 0 2.868 2.868h4.615a2.87 2.87 0 0 0 2.869-2.869v-2.47a.75.75 0 0 1 1.5 0v2.47a4.37 4.37 0 0 1-4.369 4.369H7.588a4.367 4.367 0 0 1-4.367-4.367L3.22 6.619A4.37 4.37 0 0 1 7.587 2.25h4.616a4.37 4.37 0 0 1 4.368 4.368v1.147a.75.75 0 1 1-1.5 0V6.618a2.87 2.87 0 0 0-2.868-2.868z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.7 7.813c.485-.52 1.166-.797 1.936-.797h4.995c.77 0 1.452.277 1.937.798.48.515.712 1.208.712 1.947v3.156c0 .74-.232 1.432-.712 1.947-.485.521-1.167.798-1.937.798h-4.995c-.771 0-1.453-.277-1.938-.798-.48-.515-.712-1.208-.712-1.948V9.762c0-.74.234-1.433.714-1.948m1.097 1.023c-.178.191-.31.496-.31.925v3.156c0 .43.131.735.309.925.171.184.439.32.84.32h4.995c.4 0 .668-.136.84-.32.177-.19.31-.496.31-.926V9.762c0-.43-.133-.735-.31-.925-.172-.184-.44-.32-.84-.32h-4.995c-.399 0-.667.135-.84.32"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.986 10.3a.75.75 0 0 1 .75-.75h8.794a.75.75 0 0 1 0 1.5h-8.794a.75.75 0 0 1-.75-.75M8.896 17.408a.935.935 0 1 1 1.87 0 .935.935 0 0 1-1.87 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMobileCardBankOutline;
