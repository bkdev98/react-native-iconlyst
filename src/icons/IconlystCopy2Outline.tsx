import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCopy2Outline = ({
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
      d="M3.355 3.455c.723-.777 1.748-1.205 2.94-1.205h5.774c1.051 0 1.973.33 2.675.945.699.613 1.132 1.468 1.282 2.438a.75.75 0 1 1-1.482.23c-.104-.67-.389-1.19-.789-1.54-.398-.35-.957-.573-1.686-.573H6.295c-.819 0-1.43.286-1.842.727-.416.447-.682 1.115-.682 1.968v5.439c0 .777.222 1.4.576 1.842.349.434.861.735 1.54.819a.75.75 0 0 1-.186 1.488c-1.044-.13-1.917-.613-2.524-1.368-.601-.749-.906-1.72-.906-2.781V6.445c0-1.164.367-2.22 1.084-2.99"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.994 9.132c.723-.775 1.748-1.202 2.94-1.202h5.772c1.194 0 2.22.426 2.942 1.203.718.77 1.081 1.824 1.081 2.987v5.439c0 1.162-.363 2.216-1.08 2.987-.724.776-1.75 1.203-2.944 1.203h-5.772c-1.194 0-2.22-.427-2.942-1.203-.717-.77-1.08-1.825-1.08-2.987v-5.44c0-1.163.365-2.217 1.083-2.987m1.097 1.023c-.416.446-.68 1.113-.68 1.965v5.439c0 .853.263 1.519.678 1.965.41.44 1.02.725 1.844.725h5.772c.824 0 1.436-.286 1.845-.725.415-.446.68-1.112.68-1.965v-5.44c0-.852-.265-1.519-.68-1.964-.409-.44-1.02-.725-1.844-.725h-5.773c-.82 0-1.431.285-1.842.725"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCopy2Outline;
