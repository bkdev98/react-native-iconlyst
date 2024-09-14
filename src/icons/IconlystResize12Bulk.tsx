import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystResize12Bulk = ({
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
      d="M19.991 15.569a1 1 0 0 0-1-.998h-.002a1 1 0 0 0-.998 1.003l.003 1.255-4.58-4.579L12 10.836l-4.581-4.58 1.256.003h.002a1 1 0 0 0 .001-2l-3.676-.007H5a1 1 0 0 0-1 1.001l.008 3.677a1 1 0 0 0 1 .998h.002a1 1 0 0 0 .998-1.002L6.005 7.67l4.58 4.58L12 13.664l4.58 4.58-1.256-.003h-.002a1 1 0 0 0-.002 2l3.678.008H19a1.003 1.003 0 0 0 1-1.002z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="m17.994 7.671-4.58 4.579L12 10.836l4.58-4.58-1.256.003h-.002a1 1 0 0 1-.002-2l3.677-.007h.002q.197 0 .381.076c.062.025.111.073.167.11.054.036.113.059.16.107a1 1 0 0 1 .194.293c.006.012.017.02.022.032q.076.187.076.387l-.008 3.673a1 1 0 0 1-1 .998h-.002a1 1 0 0 1-.998-1.002zM6.005 16.829l4.58-4.579L12 13.664l-4.582 4.58 1.257-.003h.002a1 1 0 0 1 .001 2l-3.676.008H5c-.077 0-.149-.027-.222-.045-.052-.011-.106-.01-.156-.031a.98.98 0 0 1-.547-.546 1 1 0 0 1-.075-.38l.008-3.678a1 1 0 0 1 1-.998.983.983 0 0 1 1 1.002z" />
    </G>
  </Svg>
);
export default IconlystResize12Bulk;
