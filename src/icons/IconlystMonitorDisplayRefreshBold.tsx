import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayRefreshBold = ({
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
      d="M15.506 8.554c0 .028-.013.052-.016.08a.7.7 0 0 1-.036.177q-.016.04-.037.08a.7.7 0 0 1-.117.173q-.023.023-.047.042c-.037.034-.066.075-.111.102a.74.74 0 0 1-.385.107c-.015 0-.027-.01-.042-.01h-1.754a.746.746 0 0 1-.253-1.449 2.5 2.5 0 0 0-.869-.157c-.789 0-1.491.405-1.879 1.084a.75.75 0 1 1-1.303-.743 3.67 3.67 0 0 1 3.182-1.84c.893 0 1.613.274 2.167.62v-.06a.75.75 0 0 1 1.5 0zm-.497 3.14a3.67 3.67 0 0 1-3.171 1.83c-.741 0-1.367-.26-1.867-.59a.74.74 0 0 1-.727.633.75.75 0 0 1-.75-.75v-1.669c0-.03.014-.056.018-.086a.713.713 0 0 1 .102-.296q.021-.036.048-.07a.7.7 0 0 1 .166-.156c.01-.006.015-.017.025-.023.007-.004.014-.003.02-.007a.7.7 0 0 1 .234-.084q.022-.005.043-.009c.032-.004.061-.019.094-.019h1.795a.75.75 0 0 1 .75.75.74.74 0 0 1-.626.725c.208.087.431.151.675.151.771 0 1.488-.414 1.873-1.08a.749.749 0 1 1 1.298.75m-4.881 8.146.434-2.666h2.875l.434 2.666zm6.843-17.18H7.028A4.534 4.534 0 0 0 2.5 7.19v5.455a4.534 4.534 0 0 0 4.528 4.53h2.014l-.433 2.665H7.055a.75.75 0 0 0 0 1.5h2.18l.012.001h7.696a.75.75 0 0 0 0-1.5H15.39l-.433-2.667h2.014a4.535 4.535 0 0 0 4.529-4.529V7.19a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayRefreshBold;
