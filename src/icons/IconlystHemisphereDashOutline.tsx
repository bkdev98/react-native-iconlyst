import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHemisphereDashOutline = ({
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
      d="M6.773 3.028a.75.75 0 0 1 0 1.06 9.467 9.467 0 0 0 13.387 13.39.75.75 0 1 1 1.061 1.06c-4.283 4.282-11.226 4.283-15.509 0s-4.283-11.227 0-15.51a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.914 3.751c-.583-.016-.935.132-1.141.338a.75.75 0 0 1-1.061-1.06c.592-.592 1.404-.8 2.244-.777.837.023 1.774.275 2.741.69 1.938.83 4.145 2.376 6.19 4.421s3.59 4.252 4.42 6.19c.415.967.667 1.904.69 2.741.024.84-.184 1.652-.776 2.244a.75.75 0 0 1-1.06-1.06c.205-.207.353-.56.337-1.142-.016-.585-.199-1.329-.569-2.192-.738-1.723-2.157-3.775-4.102-5.72s-3.998-3.365-5.72-4.104c-.864-.37-1.608-.553-2.193-.569M6.367 7.889a.75.75 0 0 1 1.01.321c.599 1.158 1.467 2.423 2.564 3.683a.75.75 0 0 1-1.132.985c-1.162-1.335-2.102-2.698-2.764-3.979a.75.75 0 0 1 .322-1.01M11.357 14.435a.75.75 0 0 1 1.057-.077c1.195 1.034 2.395 1.861 3.5 2.448a.75.75 0 1 1-.702 1.325c-1.22-.647-2.511-1.542-3.779-2.638a.75.75 0 0 1-.076-1.058"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.222 17.478a.75.75 0 0 1 0 1.06c-.65.65-1.562.836-2.492.763a.75.75 0 1 1 .118-1.495c.684.053 1.088-.103 1.313-.329a.75.75 0 0 1 1.06 0M6.772 3.027a.75.75 0 0 1 0 1.061c-.225.225-.382.629-.328 1.313a.75.75 0 1 1-1.496.118c-.073-.93.114-1.842.763-2.492a.75.75 0 0 1 1.061 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHemisphereDashOutline;
