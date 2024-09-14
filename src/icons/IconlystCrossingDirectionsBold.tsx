import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCrossingDirectionsBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.555 14.805a1 1 0 0 0-1 1v2.032l-3.626-3.626a.999.999 0 1 0-1.414 1.414l3.624 3.624h-2.027a1 1 0 1 0 0 2h4.433l.01.002a1 1 0 0 0 .386-.08c.056-.024.1-.066.15-.099.057-.038.12-.064.171-.114.031-.03.044-.072.07-.106.054-.069.111-.136.145-.218q.077-.186.078-.384v-4.445a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.478 3.868a1 1 0 0 0-.923-.618h-4.444a1 1 0 1 0 0 2h2.03l-5.587 5.587-6.402-6.403a.999.999 0 1 0-1.414 1.414l6.402 6.403-6.402 6.403a.999.999 0 1 0 1.414 1.414l7.105-7.106.005-.003.003-.005 6.29-6.29v2.03a1 1 0 1 0 2 0V4.25q0-.197-.077-.382"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCrossingDirectionsBold;
