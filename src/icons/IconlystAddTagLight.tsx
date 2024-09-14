import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddTagLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.388 18.102q-1.078 1.076-2.16 2.147c-1.225 1.208-3.095 1.19-4.32-.027-2.08-2.08-4.168-4.149-6.237-6.237-.8-.808-1.271-1.78-1.38-2.922-.082-.908-.036-4.295-.036-5.084.009-1.417 1.08-2.696 2.478-2.941C6.023 2.992 9.382 3 10.78 3c1.37 0 2.55.49 3.522 1.462.216.215 1.216 1.228 1.431 1.443"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.212 8.354a1.62 1.62 0 0 1-1.624 1.598 1.623 1.623 0 0 1-1.61-1.612 1.62 1.62 0 0 1 1.648-1.621c.872.003 1.59.743 1.586 1.635"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.246 11.49h4.996M18.743 8.988v4.996"
    />
  </Svg>
);
export default IconlystAddTagLight;
