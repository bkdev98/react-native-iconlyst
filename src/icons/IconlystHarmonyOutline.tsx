import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHarmonyOutline = ({
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
      d="M16.466 21.75H8.032c-3.309 0-5.532-2.321-5.532-5.776V8.027c0-3.455 2.223-5.777 5.532-5.777h8.435C19.776 2.25 22 4.572 22 8.027v7.947c0 3.455-2.224 5.776-5.534 5.776m-8.434-18C5.583 3.75 4 5.429 4 8.027v7.947c0 2.6 1.583 4.276 4.032 4.276h8.434c2.451 0 4.034-1.678 4.034-4.276V8.027c0-2.6-1.583-4.277-4.033-4.277z"
    />
    <Path
      fill={props.color}
      d="M9.125 17.486a2.536 2.536 0 0 1-2.5-2.5c0-2.106 2.023-3.228 3.915-3.576q.837-.131 1.685-.161c.451-.026.9-.05 1.284-.108a5.8 5.8 0 0 0 1.816-.587 1.74 1.74 0 0 0 1.058-1.538 1.04 1.04 0 0 0-1.05-1v-1.5a2.53 2.53 0 0 1 2.55 2.5 3.21 3.21 0 0 1-1.866 2.869c-.717.37-1.49.62-2.287.74-.426.063-.92.093-1.419.12q-.754.027-1.5.14c-.63.116-2.686.61-2.686 2.1a1.03 1.03 0 0 0 1 1z"
    />
    <Path
      fill={props.color}
      d="M9.267 17.485a2.65 2.65 0 0 1-2.645-2.644V9.157a2.645 2.645 0 1 1 5.289 0v5.684a2.647 2.647 0 0 1-2.644 2.644m0-9.474a1.147 1.147 0 0 0-1.145 1.146v5.684a1.145 1.145 0 0 0 2.289 0V9.157a1.147 1.147 0 0 0-1.144-1.146M15.234 17.484a2.647 2.647 0 0 1-2.644-2.644V9.156a2.644 2.644 0 0 1 5.288 0v5.684a2.647 2.647 0 0 1-2.644 2.644m0-9.474a1.147 1.147 0 0 0-1.144 1.146v5.684a1.144 1.144 0 0 0 2.288 0V9.156a1.146 1.146 0 0 0-1.144-1.146"
    />
  </Svg>
);
export default IconlystHarmonyOutline;
