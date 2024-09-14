import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxOutline = ({
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
      d="M13.464 3.82c-.167-.08-.395-.108-.693.007l-2.687 1.037c-.299.116-.447.288-.515.457-.07.176-.086.43.04.752l.002.006.641 1.678c.125.32.31.5.484.583.168.08.396.107.692-.007l2.688-1.037c.298-.115.447-.288.515-.457.07-.176.085-.43-.04-.752l-.002-.005-.642-1.677v-.002c-.126-.32-.31-.5-.483-.583m.651-1.352c.573.276.992.78 1.23 1.392l.002.005.642 1.679c.238.61.27 1.264.034 1.854-.24.597-.724 1.05-1.366 1.297l-2.688 1.037c-.64.248-1.304.239-1.883-.04-.573-.275-.993-.779-1.232-1.392l-.002-.005-.641-1.679c-.238-.61-.27-1.265-.034-1.854.24-.598.725-1.05 1.366-1.297l2.688-1.037c.642-.248 1.304-.24 1.884.04M3.342 6.528a.75.75 0 0 1 .931-.508l2.081.611a.75.75 0 0 1 .484.438l4.288 10.588.05-.002c.61-.018 1.166.23 1.555.64l7.428-2.977a.75.75 0 0 1 .558 1.392l-7.425 2.976a2.05 2.05 0 0 1-1.994 2.063 2.05 2.05 0 0 1-2.113-1.988c-.017-.575.205-1.1.575-1.482L5.584 7.97l-1.734-.51a.75.75 0 0 1-.508-.93m7.6 12.71c-.161.101-.264.28-.258.479v.001c.009.298.26.54.57.532a.55.55 0 0 0 .538-.564.552.552 0 0 0-.738-.501 1 1 0 0 1-.098.048zm5.32-8.515c-.168-.08-.396-.107-.694.008l-2.687 1.037c-.298.116-.447.288-.515.457-.07.176-.085.43.04.752l.003.005.64 1.68c.126.319.31.498.484.582.168.08.397.107.692-.007l2.689-1.037c.298-.116.446-.288.514-.457.07-.176.085-.43-.04-.753l-.002-.004-.641-1.677-.001-.002c-.125-.32-.31-.5-.483-.584m.65-1.351c.573.276.992.78 1.23 1.392l.002.005.642 1.677v.002c.238.61.27 1.265.034 1.854-.24.598-.724 1.05-1.366 1.297l-2.688 1.037c-.64.248-1.303.239-1.883-.04-.573-.276-.993-.78-1.232-1.392l-.002-.005-.64-1.679c-.239-.611-.272-1.265-.035-1.854.24-.598.725-1.05 1.367-1.297l2.687-1.037c.642-.248 1.304-.24 1.884.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxOutline;
