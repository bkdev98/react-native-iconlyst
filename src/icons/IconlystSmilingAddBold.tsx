import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingAddBold = ({
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
      d="M19.869 10.15c-3 0-5.4-2.4-5.4-5.4 0-.299.024-.572.048-.834.017-.187.033-.368.04-.547a.28.28 0 0 0-.208-.28c-.93-.266-1.867-.439-2.89-.439-5.2 0-9.5 4.3-9.5 9.5s4.3 9.5 9.5 9.5 9.5-4.3 9.5-9.5c0-.55-.045-1.046-.128-1.566-.076-.478-.292-.466-.673-.444q-.132.009-.29.01m-12.36-.36a.97.97 0 0 0-.28.68c0 .54.44.98.97.98.54 0 .98-.44.98-.98a.98.98 0 0 0-.98-.97c-.26 0-.5.1-.69.29m7.19 1.66a.98.98 0 0 1-.97-.98.97.97 0 0 1 .97-.97c.54 0 .98.44.98.97 0 .54-.44.98-.98.98m-.05 3.74c-.86 1.13-2.13 1.78-3.47 1.78s-2.61-.65-3.47-1.78c-.26-.33-.19-.8.13-1.05.33-.25.8-.19 1.06.14.58.76 1.41 1.19 2.28 1.19s1.71-.43 2.29-1.19c.25-.33.72-.39 1.05-.14s.39.72.13 1.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.242 4.648h-1.4v-1.5c0-.4-.4-.8-.8-.8s-.8.3-.8.8v1.5h-1.5c-.4 0-.8.3-.8.8s.3.8.8.8h1.5v1.4c0 .4.3.8.8.8s.8-.3.8-.8v-1.4h1.4c.4 0 .8-.3.8-.8s-.3-.8-.8-.8"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmilingAddBold;
