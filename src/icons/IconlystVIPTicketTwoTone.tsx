import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVIPTicketTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.857 10.07-1.56 3.858-1.559-3.858M12.498 10v4.001M15.368 12.447V9.922h1.754a1.262 1.262 0 0 1 0 2.524zm0 0v1.543"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.944 6.73a1.93 1.93 0 0 1-1.541-.753c-.545-.705-.818-1.057-.925-1.13-.104-.07-.076-.056-.196-.096-.122-.04-.303-.04-.664-.04-2.355 0-3.533 0-4.398.53a3.6 3.6 0 0 0-1.19 1.19c-.53.865-.53 2.043-.53 4.398v2.342c0 2.356 0 3.533.53 4.399.297.485.705.893 1.19 1.19.865.53 2.043.53 4.398.53.362 0 .543 0 .665-.04.12-.04.091-.026.196-.097.107-.072.379-.423.923-1.125.356-.46.908-.756 1.543-.755h.06a1.95 1.95 0 0 1 1.542.848c.412.6.617.9.689.964.164.147.13.13.344.182.094.023.244.023.544.023 1.655 0 2.482 0 3.136-.267a3.6 3.6 0 0 0 1.973-1.973c.267-.654.267-1.482.267-3.137v-3.815c0-1.665 0-2.498-.27-3.155a3.6 3.6 0 0 0-1.962-1.962c-.657-.27-1.49-.27-3.155-.27-.304 0-.456 0-.552.024-.207.052-.19.043-.348.188-.072.067-.258.352-.63.92a1.94 1.94 0 0 1-1.64.887"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystVIPTicketTwoTone;
