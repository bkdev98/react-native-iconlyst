import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsbStorageOutline = ({
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
      d="M11.547 5.188c.99.035 1.929.494 2.697 1.262l3.555 3.554c.768.768 1.226 1.708 1.262 2.697.035.997-.364 1.96-1.154 2.751l-5.142 5.142c-.79.79-1.754 1.19-2.751 1.153-.99-.035-1.929-.494-2.697-1.262l-3.554-3.554c-.769-.769-1.226-1.71-1.26-2.698-.036-.997.362-1.96 1.15-2.75l5.143-5.142c.79-.79 1.754-1.189 2.751-1.153m-.053 1.499c-.538-.02-1.11.186-1.637.714l-5.143 5.143c-.526.526-.732 1.097-.713 1.636.02.546.274 1.142.823 1.69l3.554 3.554c.55.55 1.144.805 1.69.825.537.019 1.108-.187 1.636-.715l5.142-5.142c.529-.53.735-1.1.715-1.638-.019-.546-.274-1.14-.823-1.69l-3.555-3.553c-.549-.55-1.143-.805-1.69-.824"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.459 2.252c.766.027 1.483.382 2.06.958l2.52 2.52c.576.576.93 1.293.958 2.06.028.775-.282 1.518-.883 2.119L18.66 12.36a.75.75 0 1 1-1.06-1.06l2.452-2.453c.338-.338.457-.688.445-1.004-.011-.325-.164-.697-.52-1.052l-2.52-2.521c-.357-.356-.729-.509-1.053-.52-.316-.012-.666.106-1.004.444l-2.453 2.453a.75.75 0 0 1-1.06-1.06l2.452-2.454c.601-.6 1.344-.91 2.119-.882"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.962 5.493a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 0 1-1.06-1.06l.01-.01a.75.75 0 0 1 1.06 0M18.722 7.255a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 0 1-1.06-1.06l.01-.01a.75.75 0 0 1 1.06 0M12.395 14.618a.75.75 0 0 1 0 1.06l-1.935 1.936a.75.75 0 1 1-1.06-1.06l1.935-1.936a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUsbStorageOutline;
