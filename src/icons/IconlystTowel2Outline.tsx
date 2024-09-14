import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel2Outline = ({
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
      d="M17.482 5.466c-.43 1.074-.712 2.61-.712 4.344s.282 3.27.712 4.344c.216.54.454.926.68 1.165.225.237.385.279.473.279s.248-.042.473-.28c.226-.238.464-.624.68-1.164.43-1.074.712-2.61.712-4.344s-.282-3.27-.712-4.344c-.216-.54-.454-.926-.68-1.165-.225-.237-.385-.279-.473-.279s-.248.042-.473.28c-.226.238-.464.624-.68 1.164m-.41-2.195c.401-.425.93-.749 1.563-.749.634 0 1.162.324 1.563.749.4.422.725.994.982 1.638.517 1.292.82 3.025.82 4.901 0 1.877-.303 3.61-.82 4.902-.257.643-.583 1.215-.982 1.637-.402.425-.93.749-1.563.749-.634 0-1.162-.324-1.563-.749-.4-.422-.725-.994-.983-1.637-.516-1.292-.82-3.025-.82-4.902 0-1.876.304-3.61.82-4.901.258-.644.583-1.216.983-1.638"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.712 5.466C4.282 6.54 4 8.076 4 9.81s.282 3.27.712 4.345c.216.539.454.925.68 1.164.224.237.384.279.472.279h12.77a.75.75 0 0 1 0 1.5H5.865c-.633 0-1.161-.325-1.562-.749-.4-.422-.725-.994-.983-1.638-.516-1.291-.819-3.024-.819-4.9s.303-3.61.82-4.902c.257-.644.582-1.216.982-1.638.4-.425.929-.749 1.562-.749h12.77a.75.75 0 0 1 0 1.5H5.865c-.088 0-.248.042-.472.279-.226.24-.464.625-.68 1.165"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.987 7.965a.75.75 0 0 1 .526.92 3.46 3.46 0 0 0 0 1.865.75.75 0 0 1-1.447.397 4.96 4.96 0 0 1 0-2.656.75.75 0 0 1 .92-.526M2.586 11.487a.75.75 0 0 1 .75-.75h1.446a.75.75 0 0 1 0 1.5H3.336a.75.75 0 0 1-.75-.75m3.758 0a.75.75 0 0 1 .75-.75h1.09a.75.75 0 0 1 0 1.5h-1.09a.75.75 0 0 1-.75-.75m3.644 0a.75.75 0 0 1 .75-.75h1.131a.75.75 0 0 1 0 1.5h-1.131a.75.75 0 0 1-.75-.75m3.643 0a.75.75 0 0 1 .75-.75h1.725a.75.75 0 0 1 0 1.5H14.38a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.25 9.458a.75.75 0 0 1 .75.75v10.506a.75.75 0 0 1-.75.75l-15.212.014a.75.75 0 0 1-.75-.75v-4.382a.75.75 0 0 1 1.5 0v3.631l13.712-.012v-9.757a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowel2Outline;