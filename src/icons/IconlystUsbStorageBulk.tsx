import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsbStorageBulk = ({
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
      d="m17.372 10.181-3.555-3.554c-.731-.732-1.613-1.156-2.528-1.189-.921-.033-1.82.334-2.566 1.08L3.58 11.661c-.745.745-1.11 1.643-1.078 2.563.033.916.456 1.799 1.188 2.53l3.554 3.555c.732.731 1.614 1.156 2.529 1.19.92.032 1.819-.334 2.565-1.081l5.142-5.142c.747-.747 1.114-1.645 1.08-2.566-.032-.915-.456-1.797-1.188-2.529"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.268 3.21c-.576-.576-1.293-.93-2.06-.958-.774-.028-1.517.282-2.118.882l-2.35 2.352c.52.092 1.021.31 1.483.637l1.928-1.928c.338-.338.688-.456 1.004-.444.324.011.696.164 1.053.52l2.52 2.52c.357.356.509.728.52 1.053.012.316-.107.666-.445 1.004l-1.927 1.927c.327.463.545.965.637 1.484l2.35-2.35c.602-.601.912-1.344.884-2.119-.027-.767-.382-1.484-.958-2.06z"
    />
    <Path
      fill={props.color}
      d="M16.712 5.493a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 0 1-1.06-1.06l.01-.01a.75.75 0 0 1 1.06 0M18.472 7.255a.75.75 0 0 1 0 1.06l-.01.01a.75.75 0 0 1-1.06-1.06l.01-.01a.75.75 0 0 1 1.06 0M12.145 15.679a.75.75 0 0 0-1.06-1.06l-1.936 1.934a.75.75 0 0 0 1.061 1.06z"
    />
  </Svg>
);
export default IconlystUsbStorageBulk;
