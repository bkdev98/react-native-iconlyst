import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTradeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.798 14-1.64 1.588a.7.7 0 0 1-.222.143l-.01.007a.7.7 0 0 1-.29.06.8.8 0 0 1-.287-.06c-.04-.015-.071-.045-.107-.068-.043-.027-.09-.046-.127-.082L12.475 14a.75.75 0 1 1 1.043-1.078l.367.355V9.774a.75.75 0 0 1 1.5 0v3.507l.37-.358A.75.75 0 1 1 16.798 14m-5.21-2.36a.75.75 0 0 1-.521-.21l-.37-.357v3.502a.75.75 0 0 1-1.5 0v-3.501l-.367.356a.75.75 0 1 1-1.043-1.078l1.629-1.576.003-.004.008-.007c.023-.022.053-.032.078-.05.05-.04.1-.08.16-.104a.7.7 0 0 1 .266-.053q.008-.003.016-.004a.8.8 0 0 1 .286.058c.042.017.074.048.112.072.042.027.088.045.125.08l1.64 1.588a.75.75 0 0 1-.521 1.289m8.186-5.35a9.53 9.53 0 0 0-6.92-3.627 9.5 9.5 0 0 0-7.275 2.773c-2.806 2.815-3.571 7.136-1.913 10.73.109.273.442.895.989 1.848a.47.47 0 0 1-.024.509c-.222.313-.504.715-.723 1.045a1.38 1.38 0 0 0-.07 1.415c.24.447.703.724 1.21.724h1.37c2.286-.002 5.112-.004 5.847 0h.033a9.49 9.49 0 0 0 7.27-3.398c2.9-3.437 2.986-8.492.206-12.018"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.798 14.001-1.64 1.587a.7.7 0 0 1-.222.143l-.01.007a.7.7 0 0 1-.289.061.8.8 0 0 1-.288-.06c-.04-.016-.071-.046-.107-.069-.043-.027-.089-.046-.127-.082l-1.64-1.587a.75.75 0 1 1 1.043-1.078l.367.355V9.774a.75.75 0 0 1 1.5 0v3.507l.37-.358a.75.75 0 1 1 1.043 1.078m-5.209-2.36a.75.75 0 0 1-.522-.211l-.37-.357v3.502a.75.75 0 0 1-1.5 0v-3.501l-.367.356a.75.75 0 1 1-1.043-1.078l1.629-1.576.003-.004.008-.007c.023-.022.053-.032.078-.05.051-.039.1-.08.16-.104a.7.7 0 0 1 .266-.053q.009-.003.016-.004a.8.8 0 0 1 .286.058c.042.017.074.048.112.072.042.027.088.045.125.081l1.64 1.587a.75.75 0 0 1-.521 1.289"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesTradeBulk;