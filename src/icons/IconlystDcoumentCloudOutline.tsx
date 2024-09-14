import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCloudOutline = ({
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
      d="M8.278 2.25h5.607c.76 0 1.484.31 2.01.856l3.762 3.92c.498.518.776 1.21.776 1.928v3.518a.75.75 0 0 1-1.5 0V8.954c0-.33-.128-.65-.358-.888l-3.762-3.92a1.29 1.29 0 0 0-.928-.396H8.273a2.97 2.97 0 0 0-2.98 2.89v10.434a2.975 2.975 0 0 0 2.91 3.04.75.75 0 1 1-.033 1.5 4.475 4.475 0 0 1-4.376-4.564V6.612A4.47 4.47 0 0 1 8.278 2.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.365 2.313a.75.75 0 0 1 .75.75v2.87a1.79 1.79 0 0 0 1.786 1.792h2.718a.75.75 0 0 1 0 1.5H16.9a3.29 3.29 0 0 1-3.284-3.291V3.063a.75.75 0 0 1 .75-.75M12.882 14.824c.516-.682 1.347-1.226 2.522-1.226 1.176 0 2.007.544 2.522 1.226.317.418.517.89.62 1.325.494.109.95.339 1.32.692.537.512.84 1.235.84 2.078a2.85 2.85 0 0 1-1.703 2.608c-.403.161-.803.223-1.125.223h-4.953a3.1 3.1 0 0 1-1.15-.24 2.84 2.84 0 0 1-1.673-2.595c.004-.828.308-1.547.838-2.06a2.77 2.77 0 0 1 1.32-.704 3.6 3.6 0 0 1 .622-1.327m1.196.905c-.289.381-.401.84-.401 1.096a.75.75 0 0 1-.744.75c-.4.003-.727.143-.95.36-.22.21-.379.534-.381.987-.003.534.314 1 .778 1.216.21.082.412.112.545.112h4.953c.139 0 .343-.028.553-.11.458-.214.775-.681.775-1.221 0-.47-.161-.79-.375-.993-.22-.21-.549-.348-.957-.351a.75.75 0 0 1-.744-.75c0-.256-.112-.715-.4-1.096-.265-.35-.672-.631-1.326-.631-.653 0-1.061.28-1.326.631"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentCloudOutline;
