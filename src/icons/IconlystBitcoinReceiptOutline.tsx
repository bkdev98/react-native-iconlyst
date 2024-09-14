import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinReceiptOutline = ({
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
      d="M12.255 21.752c-.56 0-1.115-.11-1.633-.323l-2.143-.875a1.04 1.04 0 0 0-.836.024l-.761.363a1.95 1.95 0 0 1-2.8-1.763l.01-12.256c0-2.883 1.73-4.674 4.516-4.674h7.3c2.772 0 4.493 1.791 4.493 4.675l.018 12.252a1.953 1.953 0 0 1-2.8 1.764l-.754-.361a1.03 1.03 0 0 0-.836-.025l-2.147.875a4.3 4.3 0 0 1-1.627.324m-4.167-2.775c.329 0 .654.064.958.189l2.143.874c.683.282 1.45.282 2.132 0l2.147-.875a2.53 2.53 0 0 1 2.053.062l.753.36a.453.453 0 0 0 .649-.41l-.018-12.252c0-1.449-.519-3.176-2.993-3.176h-7.3c-1.945 0-3.016 1.128-3.016 3.175l-.01 12.256a.45.45 0 0 0 .211.383.45.45 0 0 0 .436.026l.761-.363c.342-.164.716-.25 1.095-.249z"
    />
    <Path
      fill={props.color}
      d="M12.592 15.287h-2.115a.75.75 0 0 1-.75-.75V11.6a.75.75 0 0 1 .75-.75h2.05a2.27 2.27 0 0 1 2.27 2 2.217 2.217 0 0 1-2.205 2.435zm-1.365-1.5h1.365a.72.72 0 0 0 .713-.791.76.76 0 0 0-.777-.646h-1.3z"
    />
    <Path
      fill={props.color}
      d="M12.592 12.348h-2.115a.75.75 0 0 1-.75-.75V8.662a.75.75 0 0 1 .75-.75h2.05a2.27 2.27 0 0 1 2.27 2 2.215 2.215 0 0 1-2.205 2.434zm-1.365-1.5h1.365a.7.7 0 0 0 .53-.235.72.72 0 0 0 .184-.556.76.76 0 0 0-.778-.645h-1.3zM12.004 16.152a.75.75 0 0 1-.75-.75v-.865a.75.75 0 1 1 1.5 0v.865a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.004 9.41a.75.75 0 0 1-.75-.75v-.865a.75.75 0 1 1 1.5 0v.866a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinReceiptOutline;
