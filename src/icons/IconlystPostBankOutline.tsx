import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPostBankOutline = ({
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
      d="M9.903 3.061a3.76 3.76 0 0 1 4.666 0l.003.002 6.226 4.971a3.06 3.06 0 0 1 1.2 2.38v10.585a.75.75 0 0 1-1.5 0V10.432a1.56 1.56 0 0 0-.614-1.209l-.015-.011-6.23-4.974-.002-.001a2.26 2.26 0 0 0-2.802 0L4.63 9.214l-.018.013c-.38.288-.607.735-.613 1.211v10.56a.75.75 0 0 1-1.5 0V10.426c.01-.938.453-1.82 1.2-2.388zM8.1 12.744c.543-.582 1.307-.896 2.179-.896h3.937c.874 0 1.638.314 2.181.897.538.577.802 1.357.802 2.2v3.708c0 .843-.264 1.623-.802 2.2-.543.583-1.307.897-2.18.897H10.28c-.874 0-1.639-.314-2.181-.897-.537-.577-.801-1.358-.801-2.2v-3.708c0-.843.265-1.624.803-2.2m1.097 1.023c-.235.253-.4.646-.4 1.178v3.708c0 .533.164.926.399 1.178.229.247.58.419 1.083.419h3.937c.503 0 .854-.172 1.084-.419.235-.253.4-.645.4-1.178v-3.708c0-.533-.165-.926-.4-1.178-.23-.247-.581-.419-1.084-.419H10.28c-.5 0-.852.172-1.082.419m1.144 2.178a.75.75 0 0 1 .75-.75h2.315a.75.75 0 0 1 0 1.5h-2.315a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPostBankOutline;
