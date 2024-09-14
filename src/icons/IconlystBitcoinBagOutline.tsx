import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinBagOutline = ({
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
      d="M16.11 21.632H8.295c-2.022 0-3.432-.5-4.312-1.518s-1.178-2.557-.88-4.554l.729-5.641c.477-2.62 2.249-3.536 3.623-3.536h9.53c1.377 0 3.049.912 3.614 3.47l.74 5.722a4.815 4.815 0 0 1-5.227 6.057M7.455 7.882c-.4 0-1.758.165-2.142 2.267l-.723 5.618a4.17 4.17 0 0 0 .53 3.368c.577.67 1.616 1 3.175 1h7.817a4.07 4.07 0 0 0 3.1-1.114 3.94 3.94 0 0 0 .646-3.241l-.731-5.667c-.3-1.37-1.107-2.227-2.136-2.227z"
    />
    <Path
      fill={props.color}
      d="M12.556 17.908h-2.265a.75.75 0 0 1-.75-.75v-3.146a.75.75 0 0 1 .75-.75h2.2a2.38 2.38 0 0 1 2.381 2.1 2.324 2.324 0 0 1-2.313 2.548zm-1.515-1.5h1.515a.825.825 0 0 0 .819-.906.867.867 0 0 0-.887-.74h-1.447z"
    />
    <Path
      fill={props.color}
      d="M12.556 14.758h-2.265a.75.75 0 0 1-.75-.75v-3.145a.75.75 0 0 1 .75-.75h2.2a2.38 2.38 0 0 1 2.381 2.1 2.325 2.325 0 0 1-2.313 2.548zm-1.515-1.5h1.515a.823.823 0 0 0 .819-.906.867.867 0 0 0-.887-.739h-1.447zM11.928 18.833a.75.75 0 0 1-.75-.75v-.927a.75.75 0 0 1 1.5 0v.927a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M11.928 11.61a.75.75 0 0 1-.75-.75v-.926a.75.75 0 1 1 1.5 0v.927a.75.75 0 0 1-.75.75M16.244 7.886a.75.75 0 0 1-.75-.75 3.3 3.3 0 0 0-3.3-3.3h-.015a3.3 3.3 0 0 0-3.3 3.282.76.76 0 0 1-.75.756.744.744 0 0 1-.748-.742 4.806 4.806 0 0 1 4.795-4.8h.02a4.8 4.8 0 0 1 4.794 4.8.75.75 0 0 1-.746.754"
    />
  </Svg>
);
export default IconlystBitcoinBagOutline;
