import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood3Bulk = ({
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
      d="M12 6.262a2.073 2.073 0 0 0-2.073 2.073v.681c-3.787.803-6.63 3.755-6.416 7.315a.5.5 0 0 0 .5.47H19.99a.5.5 0 0 0 .499-.47c.213-3.56-2.63-6.512-6.417-7.315v-.681A2.073 2.073 0 0 0 12 6.262m.572 2.555v-.482a.573.573 0 1 0-1.145 0v.482a10 10 0 0 1 1.145 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M2.798 18.084c.202-.163.45-.225.702-.225h17c.253 0 .5.062.702.224.202.163.304.38.348.587.083.384-.013.82-.128 1.166a2.37 2.37 0 0 1-2.246 1.619H4.824a2.37 2.37 0 0 1-2.246-1.619c-.115-.345-.21-.782-.128-1.166.044-.206.146-.424.348-.587"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M8.667 2.517a.75.75 0 0 0-1.061 1.06.444.444 0 0 1 0 .63 1.945 1.945 0 0 0 0 2.751.75.75 0 1 0 1.06-1.062.444.444 0 0 1 0-.629c.76-.76.76-1.991 0-2.75M18.554 5.887a.75.75 0 0 0-1.06-1.06c-.76.76-.761 1.991 0 2.75a.75.75 0 0 0 1.06-1.061.445.445 0 0 1 0-.629M4.204 6.517a.75.75 0 0 0-1.061 1.06.444.444 0 0 1 0 .63.75.75 0 0 0 1.06 1.06c.761-.759.76-1.99 0-2.75" />
    </G>
  </Svg>
);
export default IconlystFood3Bulk;
